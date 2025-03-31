"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Camera } from "lucide-react";
import { Button } from "./ui/button";

function HomeSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageSearchActive, setImageSearchActive] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [seacrhImage, setSearchImage] = useState(null);
  const [isUploading, setIsuploading] = useState(false);
  const handleTextSubmit = () => {};
  const handleImageSearch = () => {};
  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            placeholder="Enter make,model,or use our AI Image Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
          />
          <div className="absolute right-[100px]">
            <Camera
              size={35}
              className="cursor-pointer rounded-xl p-1.5"
              onClick={() => setImageSearchActive(!isImageSearchActive)}
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />
          </div>
          <Button type="submit" className="absolute right-2 rounded-full">
            Search
          </Button>
        </div>
      </form>
      {isImageSearchActive && (
        <div className="mt-4">
          <form onSubmit={handleImageSearch}></form>
        </div>
      )}
    </div>
  );
}

export default HomeSearch;
