package com.chabanoles.graphql.repositories;

import java.util.ArrayList;
import java.util.List;

import com.chabanoles.graphql.model.Book;

/**
 * Created by Nicolas Chabanoles on 07/06/18.
 */
public class BookRepository {

    private final List<Book> books;

    public BookRepository() {
        books = new ArrayList();
        books.add(new Book("id1", "book name 1", "genre 1"));
        books.add(new Book("id2", "book name 2", "genre 2"));
    }

    public List<Book> getAllBooks() {
        return books;
    }

    public void saveBook(Book book) {
        books.add(book);
    }
}