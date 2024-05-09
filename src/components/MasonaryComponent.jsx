import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
    return (
        <>
        <Box sx={{ width: 1100 }}>
        {/* <Box sx={{ width: 1100 , border:'1px solid #727272' , display:'flex' , flexDirection:'column' , justifyContent:'center'}}> */}
            <h1 style={{color:'white', fontSize:'40px'}}>Portfolio</h1>
            <Masonry columns={3} spacing={3}>
                {itemData.map((item, index) =>
                    <div key={index}>
                        <img
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=162&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: "block",
                                width: "100%",
                            }}
                        />
                    </div>
                )}
            </Masonry>
            </Box>
        </>
    );
}

const itemData = [
    {
        img: "../../public/work_1_md.jpg.webp",
        title: "Fern"
    },
    {
        img: "../../public/work_2_md.jpg.webp",
        title: "Snacks"
    },
    {
        img: "../../public/work_3_md.jpg.webp",
        title: "Mushrooms"
    },
    {
        img: "../../public/work_4_full.jpg.webp",
        title: "Tower"
    },
    {
        img: "../../public/work_5_md.jpg.webp",
        title: "Sea star"
    },
    {
        img: "../../public/work_6_md.jpg.webp",
        title: "Honey"
    },
    {
        img: "../../public/work_7_a_md.jpg.webp",
        title: "Basketball"
    },
    {
        img: "../../public/work_8_md.jpg.webp",
        title: "Breakfast"
    },
    {
        img: "../../public/work_9_a_md.jpg.webp",
        title: "Tree"
    },
    {
        img: "../../public/work_10_a_md.jpg.webp",
        title: "Burger"
    },
    {
        img: "../../public/work_11_a_md.jpg.webp",
        title: "Camera"
    },
    {
        img: "../../public/work_12_md.jpg.webp",
        title: "Coffee"
    }
];
