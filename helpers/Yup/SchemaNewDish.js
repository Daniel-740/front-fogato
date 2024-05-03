import * as Yup from 'yup';

export const schemaNewDish = Yup.object({
	name: Yup.string()
		.min(3, 'Los platillos deben tener al menos 3 caracteres')
		.required('El nombre del platillo es obligatorio'),
	price: Yup.string()
		.min(1, 'Debes agregar un numero')
		.required('El precio del platillo es obligatorio'),
	category: Yup.string().required('La categoria es obligatoria'),
	description: Yup.string()
                    .min(5, "La descripcion debe ser mas larga")
                    .required('La description es obligatoria'),
});