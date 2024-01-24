import axiosSecure from "."

// Fetch single doctor data from db
export const getAllDoctor = async () => {
  const { data } = axiosSecure(`/doctors`)
  return data
}

// Fetch single doctor data from db
export const getDoctor = async id => {
  const { data } = axiosSecure(`/doctors/${id}`)
  return data
}
