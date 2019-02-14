import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';

class GraphiQLElement extends HTMLElement {
    parameters = {};
    constructor() {
        super();
    }
    connectedCallback() {
            console.log('GraphiQL WC Connected to DOM!');


          this.parameters.query = this.getAttribute('value');

          var that = this;

          function onEditQuery(newQuery) {
            that.setAttribute('value', newQuery);
          }

          function onEditVariables(newVariables) {
            that.parameters.variables = newVariables;
          }

          function onEditOperationName(newOperationName) {
            that.parameters.operationName = newOperationName;
          }

          // Defines a GraphQL fetcher using the fetch API. You're not required to
          // use fetch, and could instead implement graphQLFetcher however you like,
          // as long as it returns a Promise or Observable.
          function graphQLFetcher(graphQLParams) {
            // This example expects a GraphQL server at the path /graphql.
            // Change this to point wherever you host your GraphQL server.
            return fetch('http://localhost:4000/graphql', {
              method: 'post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(graphQLParams),
              credentials: 'include',
            }).then(function (response) {
              return response.text();
            }).then(function (responseBody) {
              try {
                return JSON.parse(responseBody);
              } catch (error) {
                return responseBody;
              }
            });
          }
          var style = document.createElement('style');
          style.innerHTML = '@import url("http://cdn.jsdelivr.net/npm/graphiql@0.11.2/graphiql.css");'


          this.appendChild(style);

            var that = this;

          function draw() {

            var editor = document.createElement('div');
             editor.id = "graphql-editor";
             editor.style = "height: 80vh;";
              that.appendChild(editor);

              // Render <GraphiQL /> into the body.
              // See the README in the top level of this module to learn more about
              // how you can customize GraphiQL by providing different values or
              // additional child elements.

              ReactDOM.render(
                React.createElement(GraphiQL, {
                  fetcher: graphQLFetcher,
                  query: that.parameters.query,
                  variables: that.parameters.variables,
                  operationName: that.parameters.operationName,
                  onEditQuery: onEditQuery,
                  onEditVariables: onEditVariables,
                  onEditOperationName: onEditOperationName
                }),
                editor
              );
          }

          setTimeout(draw, 200);
  }

   get value() {
      return this.getAttribute('value');
   }

   set value(newValue) {
      this.setAttribute('value', newValue);
      draw(newValue);
   }

}
customElements.define('graphiql-element', GraphiQLElement);
