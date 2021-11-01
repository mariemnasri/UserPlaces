import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of the most famous sky scrapers in the world ",
    imageUrl:
      "https://dantotsupm.files.wordpress.com/2011/06/empire-state-building.jpg",
    address: "20 W 34th St, New York, NY 10001, États-Unis",
    creator: "u1",
    location: {
      lat: 40.7487331,
      lng: -73.9794846,
    },
  },
  {
    id: "p2",
    title: "Empire",
    description: "One of the most famous sky scrapers in the world ",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.m.wikiversity.org%2Fwiki%2FFichier%3ANYC_Empire_State_Building.jpg&psig=AOvVaw1ntTqTf0f5nzSCtG-HGM-z&ust=1635682533383000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj5sf6A8vMCFQAAAAAdAAAAABAD",
    address: "20 W 34th St, New York, NY 10001, États-Unis",
    creator: "u2",
    location: {
      lat: 40.7487331,
      lng: -73.9794846,
    },
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
