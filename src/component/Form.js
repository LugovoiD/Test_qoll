import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Article from "./Article";

const ARTICLE_QUERY = gql`
    query ArticleQuery {
        allLinks {
            id
            url
            title
            addedAt
            tags {
                id
                name
            }
        }
    }
`;

export class SubmitForm extends Component {
    render() {
        return(
            <>
                <Query query={ARTICLE_QUERY}>
                    {
                        ({ loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>;
                            if(error) console.log(error);
                            return <>
                                <div className="list-article">
                                    {
                                        data.allLinks.map(article => (
                                            <Article key={article.id} article={article}/>
                                        ))
                                    }
                                </div>
                            </>
                        }
                    }
                </Query>
            </>
        );
    }
}

export default SubmitForm;

