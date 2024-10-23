import Dash from "../../images/sec2.jpeg";
import Image from "next/image";
import classes from "./ImageAppear.module.css"

const ImageAppear = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col my-16 gap-16">
        <h3 className="font-semibold">Integrates with top-tier companies</h3>
        <div>
          <Image
          className={classes.img}
            src={Dash}
            alt="Picture of Slack logo"
            width={1000}
            height={500}
            quality={100}
            priority
            sizes={"100vw"}
          />
        </div>
      </div>
    </>
  );
};

export default ImageAppear;
