import Divider from "./Divider";
import NewPostsBox from "./NewPostsBox";
import ShareBox from "./ShareBox";

function SecondColumn() {
  return (
    <div className="md:col-start-2">
      <ShareBox />
      <Divider />
      <NewPostsBox />
      <NewPostsBox />
    </div>
  );
}

export default SecondColumn;
