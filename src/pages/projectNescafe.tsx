import MenuProject from 'components/MenuProject'
import Mouse from 'components/Mouse'

const ProjectNescafe = () => {
  return (
    <>
      <Mouse />
      <MenuProject />
      <iframe
        src={
          'https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c2a68fa6-cb2d-11ed-b5bd-6595d9b17862'
        }
        width="1080"
        height="1080"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </>
  )
}

export default ProjectNescafe
