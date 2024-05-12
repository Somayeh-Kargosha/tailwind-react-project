import Community from "./Community";
import Identity from "./Identity";

function FirstColumn({isOpen}) {
  return (
    <div>
      <Identity />
      <Community isOpen={isOpen}/>
    </div>
  );
}

export default FirstColumn;
