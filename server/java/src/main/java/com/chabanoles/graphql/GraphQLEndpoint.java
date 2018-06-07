package com.chabanoles.graphql;

import com.chabanoles.graphql.repositories.BookRepository;

import com.chabanoles.graphql.resolvers.Query;
import com.coxautodev.graphql.tools.SchemaParser;
import javax.servlet.annotation.WebServlet;

import graphql.schema.GraphQLSchema;
import graphql.servlet.SimpleGraphQLServlet;

/**
 * Created by Nicolas Chabanoles on 07/06/18.
 */
@WebServlet(urlPatterns = "/graphql")
public class GraphQLEndpoint extends SimpleGraphQLServlet {

    public GraphQLEndpoint() {
        super(buildSchema());
    }

    private static GraphQLSchema buildSchema() {
        BookRepository bookRepository = new BookRepository();
        return SchemaParser.newParser()
                .file("schema.graphqls")
                .resolvers(new Query(bookRepository))
                .build()
                .makeExecutableSchema();
    }
}