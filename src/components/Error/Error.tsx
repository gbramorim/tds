import { ERROR } from "../../constants/constants";
import { ErrorContainer } from "./styles";

export default function Error() {
  return (
    <ErrorContainer>
      <h1>{ERROR.TITLE}</h1>
    </ErrorContainer>
  );
}
