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

export class ArticleList extends Component {
    render() {
        return(
            <>
                <Query query={ARTICLE_QUERY}>
                    {
                        ({ loading, error, data}) => {
                            if(loading) return <h4>Loading...</h4>;
                            if(error) console.log(error);
                            console.log(data);
                            return <>
                                <h1>Test</h1>
                                {
                                    data.allLinks.map(article => (
                                        <Article key={article.id} launch={article}/>
                                    ))
                                }
                            </>
                        }
                    }
                </Query>
            </>
        );
    }
}

export default ArticleList;

