import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    posterWrapper: {
        paddingBottom: '148%',
        background: '#999',
        position: 'relative',
        overflow: 'hidden',
    },
    posterImg: {
        position: 'absolute',
        maxWidth: '100%',
        maxHeight: '100%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
};

const MovieDetails = (props) => {
  const movieInfo = props.movieList.find(el => (
    String(el.id) === props.match.params.movieID
  ));

  const {classes} = props;

  return (
        <React.Fragment>
            <If true={movieInfo}>
                <div className="row pt-3 pb-5">
                    <div className="col-4">
                        <div className={classes.posterWrapper}>
                            <img className={classes.posterImg} src={movieInfo.image} alt={movieInfo.title}/>
                        </div>
                    </div>
                    <div className="col-8 text-white">
                        <h1 className="text-warning mb-4">
                            {movieInfo.title}
                            <span className="ml-3 badge badge-warning">
                                {movieInfo.rating}
                            </span>
                        </h1>
                        <div className="mt-4 mb-4">
                            {movieInfo.subtitle}
                        </div>
                        <span className="h5 mr-5">
                            {movieInfo.year}
                        </span>
                        <span className="h5">
                            {movieInfo.duration} min
                        </span>
                        <div className="mt-4">
                            {movieInfo.description}
                        </div>
                    </div>
                </div>
            </If>
        </React.Fragment>
  );
};

export default injectSheet(styles)(MovieDetails);