import {Result} from './types';
import gql from 'graphql-tag';

export const ALL_RESULTS_QUERY = gql`
query Results {
  results
  {
    formattedRecTime,
    tradeId,
    book,
    pair,
    isCandidateMissing,
    isReferenceMissing,
    candidate,
    reference,
    diff
  }
}
`;

export const MATCHED_RESULTS_QUERY = gql`
query MatchedResults {
  matchedResults
  {
    formattedRecTime,
    tradeId,
    book,
    pair,
    isCandidateMissing,
    isReferenceMissing,
    candidate,
    reference,
    diff
  }
}
`;

export interface AllResultQueryResponse {
	results: Result[];
	loading: boolean;
}

export interface MatchedResultQueryResponse {
	matchedResults: Result[];
	loading: boolean;
}
