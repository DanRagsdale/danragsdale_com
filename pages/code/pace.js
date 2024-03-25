import { useEffect, useState } from 'react';
import styles from '@styles/code/pace.module.css'; 

export default function Home() {
	const METERS = 1
	const KILOMETERS = 1000
	const LAPS = 400
	const FEET = 0.3048
	const MILES = 1609.344
	const SIXTEEN = 1600
	const MARATHONS = 42195
		
	const DISTANCES = new Map([
		["Kilometers", KILOMETERS],
		["Miles", MILES],
		["Laps", LAPS],
		["Marathons", MARATHONS],
		["Meters", METERS],
		["Feet", FEET],
	]);
		
	const PACES = new Map([
		["Kilometer", KILOMETERS],
		["Mile", MILES],
		["1600m", SIXTEEN],
		["Lap", LAPS],
	]);

	useEffect(() => {
		// Initialization
		const selDistance = document.getElementById('sel_distance');
		const selPace = document.getElementById('sel_pace');
		
		let params = new URLSearchParams(window.location.search)
		if (params.has('du')) {
			let unit = params.get('du');
			if (DISTANCES.has(unit)) {
				selDistance.value = unit;
			}
		}
		if (params.has('per')) {
			let per = params.get('per');
			if (PACES.has(per)) {
				selPace.value = per;
			}
		}

		let endKey = "";
		let endFunctions = {
			td : calcPace,
			tp : calcDistance,
			dp : calcTime,
			tdp :calcPace,
		};

		if (params.has('t')) {
			endKey += 't';
			setTime(+params.get('t'));
		}
		if (params.has('d')) {
			endKey += 'd';
			setDistance(+params.get('d'));
		}
		if (params.has('p')) {
			endKey += 'p';
			setPace(+params.get('p'));
		}
		if (Object.hasOwn(endFunctions, endKey)) {
			endFunctions[endKey]();
		}

		// Events
		function calcTime() {
			const distInput = document.getElementById('dist').value;
			const dist = DISTANCES.get(selDistance.value) * distInput;

			const paceTime = 60 * document.getElementById('p_mins').value + +document.getElementById('p_secs').value;
			const pace = paceTime / PACES.get(selPace.value);
	
			setUrlParams({distance: dist, pace: pace});
			setTime(pace * dist);
		}
		document.getElementById("button_time").addEventListener("click", calcTime);

		function calcDistance() {
			const time = 3600 * document.getElementById('t_hours').value + 60 * document.getElementById('t_mins').value + +document.getElementById('t_secs').value;

			const paceTime = 60 * document.getElementById('p_mins').value + +document.getElementById('p_secs').value;
			const pace = paceTime / PACES.get(selPace.value);

			setUrlParams({time: time, pace: pace});
			setDistance(time / pace);
		}
		document.getElementById("button_distance").addEventListener("click", calcDistance);
		
		function calcPace() {
			const time = 3600 * document.getElementById('t_hours').value + 60 * document.getElementById('t_mins').value + +document.getElementById('t_secs').value;

			const distInput = document.getElementById('dist').value;
			const dist = DISTANCES.get(selDistance.value) * distInput;

			setUrlParams({time: time, distance: dist});
			setPace(time / dist);
		}
		document.getElementById("button_pace").addEventListener("click", calcPace);

		// Helper functions
		function setUrlParams({time = null, distance = null, pace = null} = {}) {
			let params = new URLSearchParams();
			params.set('du', selDistance.value);
			params.set('per', selPace.value);

			if (time) params.set('t', time);
			if (distance) params.set('d', distance);
			if (pace) params.set('p', pace);

			const url = new URL(window.location.href);
			url.search = params;
			window.history.replaceState(null, null, url);
		}

		function setTime(time) {
			document.getElementById('t_hours').value = Math.floor(time / 3600);
			document.getElementById('t_mins').value = Math.floor((time % 3600) / 60);
			document.getElementById('t_secs').value = +(time % 60).toFixed(6);
		}
		function setDistance(distance) {
			distance = distance;
			const scaledDistance = distance / DISTANCES.get(selDistance.value);
			document.getElementById('dist').value = +scaledDistance.toFixed(8);
		}
		function setPace(pace) {
			const scaledPace = pace * +PACES.get(selPace.value).toFixed(6);
			document.getElementById('p_mins').value = Math.floor(scaledPace / 60);
			document.getElementById('p_secs').value = +(scaledPace % 60);
		}
	});

  return (
	<>
		<div className={`textBody ${styles.paceCalc}`}>
		<h1>Running Pace Calculator</h1>
		<p>Inspired by the defunct CoolRunning pace calculator.</p>
		<table>
		<tbody>
			<tr className={styles.lightRow}>
				<td className={styles.header}>Time</td>
				<td>
					<table>
					<tbody>
						<tr>
							<td className={styles.subTable}>Hours</td>
							<td className={styles.subTable}>Minutes</td>
							<td className={styles.subTable}>Seconds</td>
						</tr>
						<tr>
							<td className={styles.subTable}><input id="t_hours"/></td>
							<td className={styles.subTable}><input id="t_mins"/></td>
							<td className={styles.subTable}><input id="t_secs"/></td>
						</tr>
					</tbody>
					</table>
				</td>
				<td>
					<button id="button_time"> Calculate Time</button>
				</td>
			</tr>
			<tr className={styles.darkRow}>
				<td className={styles.header}>Distance</td>
				<td>
					<table>
						<tbody>
							<tr>
								<td className={styles.subTable}><input id="dist"/></td>
								<td className={styles.subTable}>
									<select id='sel_distance'>
										{Array.from(DISTANCES.keys()).map((dist, index) => (
											<option 
												key={index}
												value={dist}>
												{dist}
											</option>
										))}
									</select>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
				<td>
					<button id="button_distance"> Calculate Distance</button>
				</td>

			</tr>
			<tr className={styles.lightRow}>
				<td className={styles.header}>Pace</td>
				<td>
					<table>
					<tbody>
						<tr>
							<td className={styles.subTable}>Minutes</td>
							<td className={styles.subTable}>Seconds</td>
							<td className={styles.subTable}>Per</td>
						</tr>
						<tr>
							<td className={styles.subTable}><input id="p_mins"/></td>
							<td className={styles.subTable}><input id="p_secs"/></td>
							<td className={styles.subTable}>
								<select id='sel_pace'>
									{Array.from(PACES.keys()).map((pace, index) => (
										<option 
											key={index}
											value={pace}>
											{pace}
										</option>
									))}
								</select>
							</td>
						</tr>
					</tbody>
					</table>
				</td>
				<td>
					<button id="button_pace">Calculate Pace</button>
				</td>
			</tr>
		</tbody>
		</table>
		</div>
	</>
  )
}
