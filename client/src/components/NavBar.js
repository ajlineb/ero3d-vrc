import React, { useState } from "react";
import { Columns } from "react-bulma-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Columns>
        <Columns.Column className="is-two-fifths">Hellos!</Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
        <Columns.Column>Hellos!</Columns.Column>
      </Columns>
    </div>
  );
}

export default Navigation;
