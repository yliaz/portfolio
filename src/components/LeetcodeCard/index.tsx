import React, {FC, useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';

const LeetcodeCard: FC = () => {

  const GET_QUESTION = gql`
  query questionData($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionId
      questionFrontendId
      categoryTitle
      boundTopicId
      title
      titleSlug
      content
      translatedTitle
      translatedContent
      isPaidOnly
      difficulty
      likes
      dislikes
      isLiked
      similarQuestions
      contributors {
        username
        profileUrl
        avatarUrl
        __typename
      }
      langToValidPlayground
      topicTags {
        name
        slug
        translatedName
        __typename
      }
      companyTagStats
      codeSnippets {
        lang
        langSlug
        code
        __typename
      }
      stats
      hints
      solution {
        id
        canSeeDetail
        __typename
      }
      status
      sampleTestCase
      metaData
      judgerAvailable
      judgeType
      mysqlSchemas
      enableRunCode
      envInfo
      book {
        id
        bookName
        pressName
        source
        shortDescription
        fullDescription
        bookImgUrl
        pressImgUrl
        productUrl
        __typename
      }
      isSubscribed
      isDailyQuestion
      dailyRecordStatus
      editorType
      ugcQuestionId
      style
      exampleTestcases
      __typename
    }
  }
`

  const { loading, error, data } = useQuery(GET_QUESTION, {
    variables: { titleSlug: "two-sum" }
  })

  useEffect(() => {
    if (!loading && JSON.stringify(data)) {
      console.log(data)
    }
  }, [loading, error, JSON.stringify(data)])

  return <div>

  </div>
}

export default LeetcodeCard