import React from "react";
import "./suscripciones.css";
import { Cards } from "./Cards";
// import {getProviderPlans,getAllGroups, createGroup, joinGroup} from "../../utils/berry-contract";

const Suscripciones = ({signer}) => {
  // const plansProvider = async function getProviderPlansD(signer, providerId) {
  //   const plans = await getProviderPlans(signer, providerId);
  //   return plans;
  // }
  
  // const allGroups = async function getAllGroupsD(signer) {
  //   const groups = await getAllGroups(signer);
  //   return groups;
  // }

  // async function createGroupD(signer, providerId, planId, name) {
  //   await createGroup(signer, providerId, planId, name);
  // }
  // async function joinGroupD(signer, groupId) {
  //   await joinGroup(signer, groupId);
  // }

  return (
    <>
    <section className="section__suscripciones-container">
        <h3 className="section__suscripciones-item-title">Suscripciones</h3>
        <div className="section__suscripciones-item">
          <Cards image={require("./../../../../assets/img/Coursera.svg").default} title="Coursera"/>
          <Cards image={require("./../../../../assets/img/Duolingo.svg").default} title="Duolingo"/>
          <Cards image={require("./../../../../assets/img/Udemy.svg").default} title="Udemy"/>
          <Cards image={require("./../../../../assets/img/amazon.svg").default} title="Amazon"/>
          <Cards image={require("./../../../../assets/img/hbo.svg").default} title="HBO"/>
        </div>
    </section>
    </>
  );
};

export default Suscripciones;
