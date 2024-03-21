const { gql, default: request } = require("graphql-request");

const API_KEY = process.env.NEXT_PUBLIC_HYGRAPH_API_KEY;
const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${API_KEY}/master`


const getAllCourseList = async () => {
  const query = gql`
    query Assets {
        courseLists(orderBy: createdAt_DESC) {
          author
          id
          name
          youtubeUrl
          description
          free
          totalChapters
          sourceCode
          demoUrl
          slug
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
            }
          }
          banner {
            url
          }
        }
      }      
    `
  const result = await request(MASTER_URL, query);
  return result;
}

const getSideBanner = async () => {
  const query = gql`
    query GetSideBanner {
        sideBanners {
          banner {
            id
            url
          }
          id
          name
          url
        }
      }
    `
  const result = await request(MASTER_URL, query);
  return result;
}

const getCourseById = async (courseId) => {
  const query = gql`
    query GetCourseDetails {
        courseList(where: {slug: "`+ courseId + `"}) {
          id
          name
          author
          slug
          free
          totalChapters
          description
          banner{
            url
          }
          chapter {
            ... on Chapter {
              id
              name
              youtubeUrl
              video {
                url
              }
            }
          }
          demoUrl
          sourceCode
          tag
        }
      }
      
    `
  const result = await request(MASTER_URL, query);
  return result;
}

const EnrollToCourse = async (courseId, email) => {
  const query = gql`  
  mutation MyMutation {
    createUserEnrollCourse(
      data: {courseId: "`+ courseId + `", userEmail: "` + email + `", courseList: {connect: {slug: "` + courseId + `"}}}
    ) {
      courseId
      id
    }
    publishManyUserEnrollCoursesConnection {
      edges {
        node {
          id
        }
      }
    } 
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const checkUserEnrollToCourse = async (courseId, email) => {
  const query = gql`
  query MyQuery {
    userEnrollCourses(where: {courseId: "`+ courseId + `", userEmail: "` + email + `"}) {
      id
    }
  }
  
`
  const result = await request(MASTER_URL, query);
  return result;
}


const getUserEnrolledCourseDetails = async (id, email) => {
  const query = gql`   
  query MyQuery {
    userEnrollCourses(where: {id: "`+ id + `",userEmail: "` + email + `"}) {
      id
      userEmail
      courseId
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseList {
        banner {
          url
        }
        author
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            shortDesc
          }
        }
        demoUrl
        description
        id
        name
        sourceCode
        slug
        totalChapters
      }
    }
  }
  
  `
  const result = await request(MASTER_URL, query);
  return result;
}

const markCompletedChapter = async (enrollId, chapterId) => {

  const query = gql`
  mutation MyMutation {
    updateUserEnrollCourse(
      where: {id: "`+ enrollId + `"}
      data: {completedChapter: {create: {CompletedChapter: {data: {chapterId: "`+ chapterId + `"}}}}}
    ) {
      id
    }
    publishUserEnrollCourse(where: {id: "`+ enrollId + `"}) {
      id
    }
  }
  
    `

  const result = await request(MASTER_URL, query);
  return result;
}


const getUserAllEnrollCourseList = async (email) => {
  const query = gql`
  query MyQuery {
    userEnrollCourses(where: {userEmail: "`+ email + `"}) {
      completedChapter {
        ... on CompletedChapter {
          id
          chapterId
        }
      }
      courseId
      courseList {
        name
        free
        totalChapters
        slug
        sourceCode
        description
        demoUrl
        chapter {
          ... on Chapter {
            id
            name
          }
        }
        author
        banner {
          url
        }
      }
    }
  }
  
  `

  const result = await request(MASTER_URL, query);
  return result;

}

export default {
  getAllCourseList,
  getUserAllEnrollCourseList,
  markCompletedChapter,
  getUserEnrolledCourseDetails,
  getSideBanner,
  getCourseById,
  EnrollToCourse,
  checkUserEnrollToCourse
};






