const ExtraInfo = () => {
    return (
      <div className="rounded-lg">
        <iframe
          className="w-full aspect-video min-h-64 rounded-xl"
          src={import.meta.env.VITE_YOUTUBE_VIDEO}
        ></iframe>
      </div>
    );
  };
  
  export default ExtraInfo;