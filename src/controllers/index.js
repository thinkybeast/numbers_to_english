import numberToEnglish from "../services";
import ErrorResult from "../utils/results";
import MESSAGES from "../utils/constants";

const numToEnglish = (req, res) => {
  const { number } = req.body;

  const result = numberToEnglish(number);

  if (!result || result.statusCode === undefined) {
    res.status(500);
    res.json(new ErrorResult(MESSAGES.INTERNAL_ERROR, 500));
  } else {
    res.status(result.statusCode);
    res.json(result);
  }
};

export default numToEnglish;
