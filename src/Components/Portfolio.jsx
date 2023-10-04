/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Urdu-to-English Machine Translation using Seq2Seq Transformers Variant Model 🌐",
    description:
      "Developed a state-of-the-art machine translation system that seamlessly converts Urdu text into English leveraging the cutting-edge Transformer-based architecture. The model employs self-attention mechanisms to comprehend the nuanced contextual relationships between words in a sentence. Comprising multiple layers of encoders and decoders, it underwent extensive training on a vast parallel dataset of Urdu-English sentences. The outcome? A model finely tuned to capture the subtleties of the source language, delivering precise and eloquent translations in the target language.",
    url: "https://github.com/Kheem-Dh/Urdu-to-English-Machine-Translation-using-Seq2Seq-Transformers-Variant-Model",
  },
  {
    title: "Microsoft Azure 102 Labs: Your Gateway to AI Engineering 🚀",
    description:
      "Welcome to the Microsoft Azure 102 Labs repository, your gateway to the exciting world of AI Engineering using Microsoft Azure's robust AI services. Dive into a comprehensive collection of hands-on labs meticulously designed to equip you with the foundational skills and practical experience necessary for mastering Azure's AI offerings.",
    url: "https://github.com/Kheem-Dh/MS-AI-102-Labs-",
  },
  {
    title: "End-to-End Implementation of a QA Bot using Deep Learning 🤖",
    description:
      "Explore the world of question-answering with our end-to-end implementation of a Question-Answering (QA) bot using cutting-edge deep learning techniques. This repository is a treasure trove of code and resources dedicated to creating a QA bot that can provide accurate answers based on a given context or a set of documents.",
    url: "https://github.com/Kheem-Dh/End-to-End-Implementation-of-a-QA-Bot-using-Deep-Learning",
  },
  {
    title: "Churn Prediction Pipeline Using Azure Cloud ☁️",
    description:
      "Dive into the realm of customer churn prediction with our end-to-end solution built on the Azure Cloud platform. In this project, we set out to tackle two critical objectives: understanding the factors contributing to customer churn and deploying a classification system to predict potential churn.",
    url: "https://github.com/Kheem-Dh/Churn-Predication-Pipeline-Using-Azure-Cloud-",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
