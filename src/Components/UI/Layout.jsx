import PropTypes from 'prop-types';



function Layout({children}) {
  return (
    <section className="flex flex-col justify-start items-center mt-20 w-full min-h-screen">{children}</section>
  )
}

export default Layout


Layout.propTypes = {
  children:PropTypes.element
}