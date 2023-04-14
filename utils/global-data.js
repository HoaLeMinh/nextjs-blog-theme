/* export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Jay Doe';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
 */

export const getGlobalData = () => {
  const data = {
    name: 'OMG Talent Group',
    blogTitle: 'OMG Talent Group',
    footerText: 'All rights reserved.',
    siteLogo: 'https://static.wixstatic.com/media/f73c4f_6c4cb8e76ca14c91b5bbde588b85f398~mv2.jpg',
  };

  return {
    data
  };
};
