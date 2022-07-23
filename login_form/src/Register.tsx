import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3, 23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8, 24}$/;

export default function Register() {
  return <div></div>;
}
