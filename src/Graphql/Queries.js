import { gql } from "@apollo/client";

export const GET_BOOK = gql`
query{
    book{
        author
       title
        pages{
            content
            pageIndex
            tokens{
                position
                value
            }
        }
       
    }

}





`;
