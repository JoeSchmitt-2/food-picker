import { Box, Button, Input, ChakraProvider, Stack} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "/src/App.css";

export function Footer() {
	//this state is used to store the value of the input
	const [query, setQuerys] = useState("");

	//this state is used to store the data from the api
	/* eslint-disable @typescript-eslint/no-explicit-any */
	const [container, setContainer] = useState<any[]>([]);

	//this takes the value of the input once submit is clicked and stores it in endPoint
	const [endPoint, setendPoint] = useState("");

	//this calls fetchMe() when the state 'query->endPoint', aka input, is changed
	useEffect(() => {
		fetchMe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [endPoint]);

	//fetching data from the api
	//back ticks are used to add the value of the state 'query' to the url
	const fetchMe = () => {
		fetch(
			`https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=+${query}`,
			{
				method: "GET",
				headers: {
					"X-RapidAPI-Key":
						"70eb97ac5bmshb04b05b2e5ddfd6p1861c2jsn323041c6c66c",
					"X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
				},
			}
		)
			//adding .json() returns a promise
			.then((response) => {
				return response.json();
			})
			//data is all of the elements from the api being stored in the state 'container'
			.then((data) => {
				setContainer(data.hints);
			})
			//error catching
			.catch((err) => {
				console.error(err);
			});
	};

	//e is every value we type in
	//setQuerys is the changer that updates the state
	const onChangeHandler = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		if (!event.target) return;
		setQuerys(event.target.value);
	};

	//allows the submit button to work
	//setendPoint having endpoint as a parameter allows us to use the value of endpoint once the
	//button is clicked and used as the value for endPoint which is set by setendPoint
	const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		setendPoint(query);
	};

	return (
		<ChakraProvider>
			<Box display="flex" justifyContent="center"  pt="20" pb="19">
				<form onSubmit={submitHandler}>
					<Input
						size="lg"
						width="sm"
						type="text"
						placeholder="Enter a query to appease the hippos hunger"
						value={query}
						onChange={onChangeHandler}
					/>
					<Button colorScheme="blue" verticalAlign="top" size="lg" type="submit">
						Search
					</Button>
				</form>
			</Box>
			{container.map((item, index) => {
				return (
					<Stack key={index} className="element">
						<img src={item.food.image} alt="" />
						<p>{item.food.label}</p>
					</Stack>
				);
			})}
		</ChakraProvider>
	);
}
