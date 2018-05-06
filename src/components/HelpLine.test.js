import React from 'react';
import renderer from 'react-test-renderer';

import HelpLine from './HelpLine';

import MockFilmList from '../MockFilmList';

jest.mock('../MockFilmList', () => {
    return [
        {
            id: 1,
            image: '../img/poster1.jpg',
            title: "KILL BILL",
            year: "2004",
            category: "Action & Adventure",
            rating: 4.3,
            subtitle: 'Oscar-winning Movies',
            duration: 135,
            description: "In contrast to Kill Bill Vol. 1 (2003), which wasn't much more than a series of fight scenes, the second half of Quentin Tarantino's martial arts epic (2004) delivers more of the pleasures that made him the wunderkind of 90s cinema: offbeat scumbag characters, narrative sleight of hand, an extraordinary visual sense, and affectionate genre pillaging. But with its half-baked maternal themes, the completed work is the first instance of Tarantino's prodigious sizzle being distinguishable from steak. With David Carradine, Michael Madsen, Michael Parks, and an extraordinary lead performance by Uma Thurman."
        },
        {
            id: 2,
            image: '../img/poster1.jpg',
            title: "KILL BILL 2",
            year: "2007",
            category: "Action",
            rating: 4.1,
            subtitle: 'Oscar-winning Movies',
            duration: 115,
            description: "In contrast to Kill Bill Vol. 2 (2007), which wasn't much more than a series of fight scenes, the second half of Quentin Tarantino's martial arts epic (2004) delivers more of the pleasures that made him the wunderkind of 90s cinema: offbeat scumbag characters, narrative sleight of hand, an extraordinary visual sense, and affectionate genre pillaging. But with its half-baked maternal themes, the completed work is the first instance of Tarantino's prodigious sizzle being distinguishable from steak. With David Carradine, Michael Madsen, Michael Parks, and an extraordinary lead performance by Uma Thurman."
        },
    ];
});

describe('Help Line', () => {

    it('Renders correctly (Snapshot)', () => {
        const tree1 = renderer
                .create(
                    <HelpLine movieList={MockFilmList}/>
                )
                .toJSON(),
            tree2 = renderer
                .create(
                    <HelpLine category="custom category"/>
                )
                .toJSON(),
            tree3 = renderer
                .create(
                    <HelpLine/>
                )
                .toJSON();

        expect(tree1).toMatchSnapshot();
        expect(tree2).toMatchSnapshot();
        expect(tree3).toMatchSnapshot();

        jest.unmock('../MockFilmList');
    });
});

