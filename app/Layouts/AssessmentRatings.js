import Assessment from "../components/Assessment";
import Ratings from "../components/Ratings";

function AssessmentRatings({ children }) {
  return (
    <div className="pt-6 max:grid max:grid-cols-2 gap-x-20">
      <Assessment>{children}</Assessment>
      <Ratings />
    </div>
  );
}

export default AssessmentRatings;
