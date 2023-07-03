import { useState } from "react";
import Pagination from "../Pagination/Pagination";

const MySkill = () => {
    const [front, setFront] = useState("front");
    const [backend, setBackend] = useState("")
    const [tools, setTools] = useState("")

    const handleFront = () =>{
        setBackend("")
        setTools("")
          setFront("front");
    }
    const handleBackend = () =>{
        setFront("")
        setTools("");
        setBackend("backend");
    }
    const handleTools = () =>{
        setBackend("");
        setFront("");
         setTools("tools");
    }
//    console.log(backend)
    return (
      <div>
        <div>
          <h2 className="text-white text-3xl font-semibold text-center">
            My Skills
          </h2>
          <hr className="w-[100px] border-2 my-2 bg-[#E5E6E6] border-[#10AFAF] rounded-full h-1 mx-auto" />
          <div className="flex gap-6 justify-center items-center my-4">
            <div
              onClick={() => handleFront()}
              className={
                front === "front"
                  ? "bg-white w-[100px] rounded"
                  : "bg-[#10AFAF] w-[100px] rounded"
              }
            >
              <p className="text-center font-semibold cursor-pointer p-2">
                Front-End
              </p>
            </div>
            <div
              onClick={() => handleBackend()}
              className={
                backend === "backend"
                  ? "bg-white w-[100px] rounded"
                  : "bg-[#10AFAF] w-[100px] rounded"
              }
            >
              <p className="text-center font-semibold cursor-pointer p-2">
                Backend
              </p>
            </div>
            <div
              onClick={() => handleTools()}
              className={
                tools === "tools"
                  ? "bg-white w-[100px] rounded"
                  : "bg-[#10AFAF] w-[100px] rounded"
              }
            >
              <p className="text-center font-semibold cursor-pointer p-2">
                Tools
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mb-6">
            {front === "front" ? (
              <>
                {" "}
                <Pagination tach={"html"} per={90} />
                <Pagination tach={"css"} per={90} />
                <Pagination tach={"Bootstrap"} per={70} />
                <Pagination tach={"Tailwind"} per={80} />
                <Pagination tach={"JavaScript"} per={75} />
                <Pagination tach={"React Js"} per={80} />
              </>
            ) : backend === "backend" ? (
              <>
                <Pagination tach={"Express"} per={60} />
                <Pagination tach={"MongoDB"} per={50} />
                <Pagination tach={"Node Js"} per={50} />
                <Pagination tach={"Firebase"} per={80} />
                <Pagination tach={"REST APIs"} per={70} />
                <Pagination tach={"JWT"} per={70} />
                <Pagination tach={" Payment Stripe"} per={80} />
              </>
            ) : tools === "tools" ? (
              <>
                <Pagination tach={"Vs Code"} per={75} />
                <Pagination tach={"Git & Github"} per={60} />
                <Pagination tach={"Vercel"} per={50} />
                <Pagination tach={"Netlify"} per={70} />
                <Pagination tach={"Figma"} per={60} />
                <Pagination tach={"Adobe PhotoShop"} per={60} />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
};

export default MySkill;