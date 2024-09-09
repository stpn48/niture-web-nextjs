import React from "react";

const reviews = [
  {
    id: 1,
    review:
      "The quality of the furniture from this company is unmatched. I recently purchased a dining table from their 2022 Collection, and it's the centerpiece of my home. The minimalist design and premium materials make it both stylish and durable. Highly recommend!",
    name: "Samantha R.",
  },
  {
    id: 2,
    review:
      "I was blown away by the modern living room furniture from the 2024 Collection. The craftsmanship is impeccable, and the sleek design fits perfectly with my home decor. It’s clear that a lot of thought went into each piece. I couldn’t be happier with my purchase!",

    name: "David M.",
  },
  {
    id: 3,
    review:
      "From start to finish, the experience with this company has been fantastic. The minimalist style of their furniture is exactly what I was looking for, and the attention to detail in their products is evident. The customer service was also top-notch. Will definitely be shopping here again!",

    name: "Emily T.",
  },
  {
    id: 4,
    review:
      "The furniture from this brand transformed my living space. The modern designs are elegant and the materials are top-quality. The 2024 Collection’s living room pieces have added a touch of sophistication to my home. I’m very impressed and pleased with the investment.",

    name: "Michael B.",
  },
];

export function  ClientFeedbackSection() {
  return (
    <div className="py-[60px] px-20">
      <h1 className="text-lg w-full flex justify-center mb-10">
        Client Feedback
      </h1>
      <div className="flex gap-16 flex-wrap justify-center secondary-text-color">
        {reviews.map((review) => (
          <div className="flex w-[250px] flex-col gap-5">
            <p key={review.id} className="text-justify italic">
              "{review.review}"
            </p>
            <h2 className="text-black not-italic">-{review.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
