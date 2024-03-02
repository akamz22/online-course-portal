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

const getSideBanner = async () =>{
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

const getCourseById = async(courseId) =>{
    const query = gql`
    query GetCourseDetails {
        courseList(where: {slug: "`+courseId+`"}) {
          id
          name
          author
          slug
          totalChapters
          description
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

export default { getAllCourseList , getSideBanner ,getCourseById};
