import ProfileRatingsPodium from "./ProfileRatingsPodium";

export default function ProfileRatingsList(props) {
  const latestFeedbackThreads = props.feedbackThreads.slice(-3);
  // Sort the latest feedback threads based on score in ascending order
  latestFeedbackThreads.sort((a, b) => b.score - a.score); // Sort in descending order

  return (
    <div className="d-flex flex-row h-100 justify-content-around">
      {/* Render the left podium with the second-highest score */}
      <ProfileRatingsPodium
        id={latestFeedbackThreads[1]?.id}
        rating={latestFeedbackThreads[1]?.score}
      />

      {/* Render the middle podium with the highest score */}
      <ProfileRatingsPodium
        id={latestFeedbackThreads[0]?.id}
        rating={latestFeedbackThreads[0]?.score}
      />

      {/* Render the right podium with the lowest score */}
      <ProfileRatingsPodium
        id={latestFeedbackThreads[2]?.id}
        rating={latestFeedbackThreads[2]?.score}
      />
    </div>
  );
}
