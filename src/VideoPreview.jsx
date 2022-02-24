const VideoPreview = ({file})=>{
    return (
        <>
        <video width="400" controls>
    <source src={file}/>
</video>
        </>
    )
}
export default VideoPreview