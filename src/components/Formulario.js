import { useForm} from "react-hook-form"

const Formulario = () => {

const {register ,formState:{errors}, handleSubmit} = useForm()

const onSubmit = (data) => {
 console.log(data)
}


  return (

    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input type="text" {...register('nombre', {
            required: true,
            maxLength: 10
          })}/>
          {errors.nombre?.type === 'required' && <p>El campo nombre es requerido.</p>}
        </div>
        <div>
          <label>Apellido</label>
          <input type="text" {...register('apellido', {
            required: true,
            maxLength: 10
          })}/>
          {errors.nombre?.type === 'required' && <p>El campo nombre es requerido.</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })}/>
          {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto.</p>}
        </div>
        <div>
          <label>Mensaje</label>
          <input type="text" {...register('mensaje', {
            required: true,
            maxLength: 50
          })}/>
        </div>
        <input type="submit" value='enviar' className="btn btn-warning"/>
      </form>

    </div>
  )
}

export default Formulario
