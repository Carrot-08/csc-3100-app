// src/MyApp.jsx
import React from "react";
import Table from "./Table"

const characters = [
	{
		name: "Charlie"
		job: "Janitor"
	},
	{
		name: "Mac"
		job: "Bouncer"
	},
	{
		name: "Dee"
		job: "Aspiting actress"
	},
	{
		name: "Dennis"
		job: "Bartender"
	},
];

return (
	<div className="container">
	<Table characterData={characters} />
	</div>
);

function MyApp() {
  return (
    <div className="container">
	  <Table />
    </div>
  );
}

export default MyApp;
