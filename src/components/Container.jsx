// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
    return (
      <div className='max-w-[2520px] mx-auto xl:px-10 md:px-8 sm:px-2 px-4'>
        {children}
      </div>
    )
  }
  
  export default Container