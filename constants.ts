interface whoAreWeInterface {
  pointNumber: string;
  title: string;
  description: string;
}

export const whoAreWe: whoAreWeInterface[] = [
  {
    pointNumber: "1",
    title: "Passionate About Design",
    description:
      "We believe in minimalism and elegance. Our expert team creates homes with clean lines, open spaces, and natural light, ensuring each property is a masterpiece.",
  },
  {
    pointNumber: "02",
    title: "Committed to Quality",
    description:
      "Quality is our cornerstone. From the finest materials to cutting-edge construction, we ensure every home is durable and sophisticated, standing the test of time.",
  },
  {
    pointNumber: "03",
    title: "Driven by Innovation",
    description:
      "Innovation drives us. We integrate the latest technologies and sustainable practices, creating luxurious, eco-friendly homes that are as advanced as they are beautiful.",
  },
];

interface RatingInterface {
  value: number;
  title: string;
  comment: string;
  author: string;
}

export const ratingInfo: RatingInterface[] = [
  {
    value: 3.5,
    title: " A Seamless Experience",
    comment: "From start to finish, working with Habitat was a seamless experience. They helped me find the perfect home that fits my style and needs. The minimalistic yet luxurious design is exactly what I was looking for",
    author: "Emily Chen"
  },
  {
    value: 4.5,
    title: "Beautiful and Functional Homes",
    comment: "I recently purchased a house through Habitat, and it exceeded all my expectations. The modern design and practical layout make it a perfect home for my family. The buying process was smooth and hassle-free.",
    author: "David Johnson"
  },
  {
    value: 5,
    title: "Exceptional Quality and Service",
    comment: "I am thrilled with my new home from Habitat. The quality of construction and attention to detail are outstanding. The staff provided exceptional service and made the whole experience enjoyable.",
    author: "Jessica Williams"
  },
];

interface TeamMemberInerface {
  imageURL: string;
  name: string;
  position: string;
}

export const teamMember: TeamMemberInerface[] = [
  {
    imageURL: "woman1.jpg",
    name: "Emma Davis",
    position: "Chief Executive Officer (CEO)"
  },
  {
    imageURL: "man1.jpg",
    name: "Liam Carter",
    position: "Head of Architecture and Design"
  },
  {
    imageURL: "woman2.jpg",
    name: "Olivia Mitchell",
    position: "Sales Director"
  },
  {
    imageURL: "man2.jpg",
    name: "Noah Johnson",
    position: "Head of Construction and Development"
  },
];