import swal from "sweetalert"

export const callSwal = (title, text, icon) => {
  swal({
    title,
    text,
    icon
  })
}