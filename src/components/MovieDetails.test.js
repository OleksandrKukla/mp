import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from './MovieDetails';

const list = [
    {
        id: '123',
        image: 'http://domen.com/some.jpg',
        title: 'Some title',
        year: '1999-03-05',
        category: 'actions',
        rating: 300,
        subtitle: 'actions',
        duration: 120,
        description: 'good movie'
    }
];

describe('MovieDetails', () => {

    it('Renders correctly (Snapshot)', () => {
        const tree1 = renderer
                .create(
                    <MovieDetails required={true} movieList={list} match={{params: {movieID: '123'}}}/>
                )
                .toJSON();

        expect(tree1).toMatchSnapshot();
    });
});

