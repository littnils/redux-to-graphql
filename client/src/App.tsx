import React, { useState } from 'react';
import { QueryResult } from '@apollo/react-common';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const resolvers = {
};

const GET_PRODUCT = gql`
  query GetProduct($productId: Integer!) {
    product(productId: productId) {
      
    }
  }
`;

const App: React.FC = () => {
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const {
    data,
    loading,
    error,
    refetch,
    networkStatus,
    client,
  }: QueryResult<
    ApolloTypes.GetProduct
  > = useQuery(GET_PRODUCT, {
    variables: { name: selectedSubreddit },
    notifyOnNetworkStatusChange: true,
  });

  client.addResolvers(resolvers);

  const refetching = networkStatus === 4;

  if (loading && !refetching) return <h2>Loading...</h2>;
  if (error) return <h2>{`Error: ${error}`}</h2>;

  return (
    <div>

    </div>
  );
};

export default App;
