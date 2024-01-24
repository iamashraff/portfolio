import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import gdiid2023 from "../../media/achievement/gdiid2023.png";
const fontStyle = { fontFamily: "Poppins" };

export function CardAchievement() {
  return (
    <Card className="w-96 mt-5 mb-5">
      <CardHeader shadow={false} floated={false}>
        <img src={gdiid2023} alt="card-image" className="h-48 object-cover" />
      </CardHeader>
      <CardBody>
        <div className="mb-2 text-center">
          <Typography
            style={{ ...fontStyle, fontSize: "15px" }}
            color="blue-gray"
            className="font-medium"
          >
            Apple AirPods
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
