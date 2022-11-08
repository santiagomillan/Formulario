import React from 'react';
import { Formik } from 'formik';

const Formulario = () => {
	return (
		<>
			<Formik
				initialValues={{
					nombre: "",
					correo: "",
					tipo: "c",
					celular: "",
					contraseña: "",
				}}
				validate={(valores) => {
					let errores = {}
					// console.log(valores.tipo)
					if (!valores.nombre) {
						errores.nombre = 'Por favor ingresa un nombre'
					} else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,20}$/.test(valores.nombre)) {
						errores.nombre = "Ingresa un nombre valido, solo se aceptan letras y espacios"
					}

					if (!valores.apellido) {
						errores.apellido = 'Por favor ingresa un apellido'
					} else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,20}$/.test(valores.apellido)) {
						errores.apellido = "Ingresa un apellido valido, solo se aceptan letras y espacios"
					}

					if (!valores.correo) {
						errores.correo = 'Por favor ingresa un correo'
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
						errores.correo = "El correo no es valido "
					}

					if (valores.tipo === "c") {
						if (!valores.cedula) {
							errores.cedula = 'Por favor ingresa un numero de cedula'
						} else if (!/^[0-9][0-9]{4,9}$/.test(valores.cedula)) {
							errores.cedula = "El numero de cedula no es valido "
						}
					} else if (valores.tipo === "p") {
						if (!valores.cedula) {
							errores.cedula = 'Por favor ingresa un numero del pasaporte'
						} else if (!/^[0-9][a-zA-Z0-9-]{8,10}$/.test(valores.cedula)) {
							errores.cedula = "El numero de pasaporte no es valido "
						}
					}

					if (!valores.celular) {
						errores.celular = 'Por favor ingresa un numero de celular'
					} else if (!/^[3][0-9]{9}$/.test(valores.celular)) {
						errores.celular = "El numero de celular no es valido "
					}
					// /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
					if (!valores.password) {
						errores.password = 'Por favor ingresa una contraseña'
					} else if (!/(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(valores.password)) {
						errores.password = `La contraseña no es valida. debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos.`
					}

					return errores
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					alert("Formulario Enviado")
					console.log(valores)
					console.log('Formulario')
				}}
			>
				{({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
					<form className="formulario" onSubmit={handleSubmit}>
						{/* {console.log(errors)} */}
						<div>
							<label htmlFor='nombre'>Nombre</label>
							<input type="text" id="nombre" name="nombre" placeholder="Nombre" value={values.nombre} onChange={handleChange} onBlur={handleBlur} />
							{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
						</div>
						<div>
							<label htmlFor='apellido'>Apellido</label>
							<input type="text" id="apellido" name="apellido" placeholder="Apellido" value={values.apellido} onChange={handleChange} onBlur={handleBlur} />
							{touched.apellido && errors.apellido && <div className="error">{errors.apellido}</div>}
						</div>
						<div>
							<label htmlFor='cell'>Celular</label>
							<input type="number" id="celular" name="celular" placeholder="Celular" value={values.celular} onChange={handleChange} onBlur={handleBlur} />
							{touched.celular && errors.celular && <div className="error">{errors.celular}</div>}
						</div>
						<div>
							<label htmlFor='ciudad'>Ciudad</label>
							<input list="city" placeholder="Ciudad" onChange={handleChange} onBlur={handleBlur} />
							<datalist id="city">
								<option value="Bogotá" />
								<option value="Medellín" />
								<option value="Cartagena" />
								<option value="Cali" />
								<option value="Santa Marta" />
								<option value="Barranquilla" />
								<option value="Villavicencio" />
								<option value="San Gil" />
								<option value="Bucaramanga" />
							</datalist>
							{touched.ciudad && errors.ciudad && <div className="error">{errors.ciudad}</div>}
						</div>
						<div>
							<label htmlFor='fecha'>Fecha de nacimiento</label>
							<input type="date" id="start" name="trip-start" min="1910-01-01" max="2022-11-01" value={values.fecha} onChange={handleChange} onBlur={handleBlur} />
						</div>
						<div>
							<label htmlFor='tipoDocumeto'>Tipo de documento</label>
							<select id="tipo" name="tipo" placeholder=" " value={values.tipo} onChange={handleChange} onBlur={handleBlur}>
								<option value="c">Cedula</option>
								<option value="p">Pasaporte</option>
							</select>
						</div>
						<div>
							<label htmlFor='numDoce'>Numero de documento</label>
							{values.tipo === "c" ? <input type="number" id="cedula" name="cedula" placeholder="Cedula" value={values.cedula} onChange={handleChange} onBlur={handleBlur} /> : <input type="text" id="cedula" name="cedula" placeholder="Cedula" value={values.cedula} onChange={handleChange} onBlur={handleBlur} />}
							{touched.cedula && errors.cedula && <div className="error">{errors.cedula}</div>}
						</div>
						<div>
							<label htmlFor='correo'>Correo</label>
							<input type="email" id="correo" name="correo" placeholder="Correo" value={values.correo} onChange={handleChange} onBlur={handleBlur} />
							{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
						</div>
						<div>
							<label htmlFor='contrase'>Contraseña</label>
							<input type="password" name="password" id="password" placeholder="Contraseña" value={values.password} onChange={handleChange} onBlur={handleBlur} />
							{touched.password && errors.password && <div className="error">{errors.password}</div>}
						</div>

						<button type="submit">Enviar</button>
						{/* <p>Formulario enviado</p> */}
					</form>
				)}
			</Formik>
		</>
	);
}

export default Formulario;