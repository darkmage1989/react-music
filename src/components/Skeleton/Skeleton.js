import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
  <ContentLoader
    rtl
    speed={1}
    width={250}
    height={50}
    viewBox="0 0 400 150"
    backgroundColor="#0a0a0a"
    foregroundColor="#f8f7f7"
    {...props}
  >
    <rect x="25" y="15" rx="5" ry="5" width="250" height="20" />
  </ContentLoader>
)

export default MyLoader
