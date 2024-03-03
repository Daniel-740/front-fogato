export default function Page() {
	return (
		<>
               <h2 className="text-3xl font-light mb-4">Agregar Platillo</h2>

               <div className="flex justify-center mt-10">
                    <div className="w-full max-w-3xl ">
                        <form>
                              <div className="mb-4">
                                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre"> 
                                        Nombre
                                   </label>
                                   <input 
                                        id="nombre"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Nombre del platillo"
                                   />
                              </div>

                              <div className="mb-4">
                                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio"> 
                                        Precio
                                   </label>
                                   <input 
                                        id="precio"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder="20$"
                                        min="0"
                                   />
                              </div>

                              <div className="mb-4">
                                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria"> 
                                        Categoria
                                   </label>
                                   <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                   name="categoria">
                                        <option value="">-- Seleccione --</option>
                                        <option value="desayuno">Desayuno</option>
                                        <option value="almuerzo">Almuerzo</option>
                                        <option value="cena">Cena</option>
                                        <option value="bebida">Bebida</option>
                                        <option value="postre">Postre</option>
                                        <option value="ensalada">Ensalada</option>
                                   </select>
                              </div>

                              <div className="mb-4">
                                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen"> 
                                        Imagen
                                   </label>
                                   <input 
                                        id="imagen"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="file"
                                   />
                              </div>

                              <div className="mb-4">
                                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion"> 
                                        Descripcion
                                   </label>
                                   <textarea
                                        id="descripcionm"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                                        placeholder="Descripcion del platillo"
                                   ></textarea>
                              </div>

                              <input type="submit" className="bg-[#e65654] hover:bg-[#ca4947] cursor-pointer w-full mt-5 p-2 text-white uppercase font-bold" value="Agregar Platillo" />
                        </form>
                    </div>
               </div>
          </>
	);
}
