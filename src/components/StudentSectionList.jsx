import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import nostudent from "../assets/nostudent.png";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Popover from "@mui/material/Popover";

import PaginationItem from "@mui/material/PaginationItem";
import {
  Modal,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  FormLabel,
} from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  adminDeleteStudent,
  adminGetStudentList,
  adminUpdateStudent,
  deleteStudent,
  getStudentList,
  updateStudent,
} from "../services/Axios.service";

function StudentSectionList({ sectionId }) {
  const role = useSelector((state) => state.appAuth.role);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [pageNo, setPageNo] = useState(1);
  const [totalStudentCount, setTotalStudentCount] = useState(5);
  const [limit, setLimit] = useState(5);
  const [StudentData, setStudentData] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    rollNumber: "",
    gender: "",
    age: "",
    phone: "",
    email: "",
    address: "",
  });
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false);
  const [idForDelete, setIdForDelete] = useState();

  const getStudent = async () => {
    let studentList;
    if (role === "teacher") {
      studentList = await getStudentList(sectionId, pageNo);
    } else {
      studentList = await adminGetStudentList(sectionId, pageNo);
    }
    setTotalStudentCount(studentList.data.result.totalCount);
    setLimit(studentList.data.result.limit);
    setStudentData(studentList.data.result.studentList);
    setStudentList(studentList.data.result.studentList);
  };

  useEffect(() => {
    getStudent();
  }, [pageNo]);

  useEffect(() => {
    if (selectedStudent) {
      setFormValues({
        _id: selectedStudent["_id"],
        firstname: selectedStudent.firstname,
        lastname: selectedStudent.lastname,
        rollNumber: selectedStudent.rollNumber,
        gender: selectedStudent.gender,
        age: selectedStudent.age,
        phone: selectedStudent.phone,
        email: selectedStudent.email,
        address: selectedStudent.address,
      });
    }
  }, [selectedStudent]);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  const handleSearch = () => {
    const searchInputLower = searchInput.toLowerCase();
    const searchedStudent = studentList.filter(
      (itm) =>
        itm.firstname.toLowerCase() === searchInputLower ||
        itm.username.toLowerCase() === searchInputLower
    );
    setStudentData(searchedStudent);
  };

  const handleClear = () => {
    setSearchInput("");
    setStudentData(studentList);
  };

  const handleClick = (event, student) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudent(student);
    setIdForDelete(student["_id"]);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedStudent(null);
  };

  const handleDelete = () => {
    setDeleteConfirmModal(true); // Show delete confirmation modal
    handleClose();
  };

  const handleConfirmDelete = async () => {
    try {
      if (role === "teacher") {
        await deleteStudent(idForDelete);
        console.log("t");
      } else {
        await adminDeleteStudent(idForDelete);
        console.log("a");
      }
      getStudent();
      toast.success("Student deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete student!");
    }
    setDeleteConfirmModal(false);
    setSelectedStudent(null);
  };

  const handleUpdate = () => {
    setOpenModal(true);
    handleClose();
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedStudent(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleModalSubmit = async (event) => {
    event.preventDefault();
    const updatedStudent = {
      ...formValues,
    };
    try {
      if (role === "teacher") {
        await updateStudent(updatedStudent["_id"], updatedStudent);
      } else {
        await adminUpdateStudent(updatedStudent["_id"], updatedStudent);
      }
      getStudent();
      toast.success("Student updated successfully!");
    } catch (error) {
      toast.error("Failed to update student!");
    }
    setOpenModal(false);
    setSelectedStudent(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={`${isDarkMode ? "bg-[#112138]" : ""} flex flex-col`}>
      <Toaster />
      <div
        className={`${
          isDarkMode ? "bg-blue-950" : " bg-sky-950"
        } flex flex-col justify-center w-full max-md:max-w-full`}
      />
      <div
        className={`${
          isDarkMode ? "bg-[#112138]" : "bg-[#EFF6FC]"
        } flex flex-col self-center pr-3 w-full max-w-[90%] mt-3 rounded  max-md:max-w-full`}
      >
        <div className="flex flex-col self-center w-full font-medium max-w-[1478px] max-md:max-w-full">
          <div className="flex pl-4 gap-5 h-10 mt-10 max-md:flex-wrap max-md:mt-10">
            <div className="flex flex-auto justify-around gap-3 text-lg text-sky-950 max-md:flex-wrap max-md:max-w-full">
              <div
                className={`flex flex-col grow shrink-0 justify-center items-start py-0.5 rounded basis-0 w-fit max-md:max-w-full max-md:hidden`}
              >
                <div className="flex gap-4 px-4 py-3.5 rounded-3xl w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/74e76d4d72d68d2ad4c35f2227992fc796d750093cd063bd440074b4e49127c1?apiKey=5571847fc48447bbad48faecb3b890d9&"
                    className={`${
                      isDarkMode ? " bg-[#0D192F]" : ""
                    } shrink-0 w-6 aspect-square`}
                  />
                  <div className="flex justify-between w-full">
                    <input
                      type="text"
                      placeholder="Search here..."
                      className={`${
                        isDarkMode ? " bg-[#0D192F] text-white" : ""
                      } px-3 rounded-md focus:outline-none w-full`}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                      }}
                      value={searchInput}
                    />
                    <button
                      className="bg-[#2f0d0d]  text-white hover:text-blue-950  hover:bg-white hover:border-2 hover:border-red-950 py-1 px-4 ml-2 w-40 text-lg rounded-md"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                    <button
                      className="bg-[#0d192f]  text-white hover:text-blue-950  hover:bg-white hover:border-2 hover:border-blue-950 py-1 px-4 ml-2 w-40 text-lg rounded-md"
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {StudentData.length > 0 ? (
          <>
            <div className="w-full max-md:max-w-full px-3">
              <table
                className={`${
                  isDarkMode ? " bg-[#0D192F]" : "bg-white"
                } w-full max-md:px-5 max-md:max-w-full mt-6`}
              >
                <thead>
                  <tr className="text-base font-medium text-indigo-900">
                    <th
                      className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 `}
                    >
                      RollNumber
                    </th>
                    <th
                      className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2`}
                    >
                      FirstName
                    </th>
                    <th
                      className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 max-xl:hidden`}
                    >
                      Gender
                    </th>
                    <th
                      className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 max-md:hidden`}
                    >
                      Phone
                    </th>
                    <th
                      className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 max-lg:hidden`}
                    >
                      Email
                    </th>
                    <th
                      className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2`}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {StudentData.map((data, i) => (
                    <tr
                      className={`${
                        i % 2 === 0
                          ? isDarkMode
                            ? "bg-[#0D2137]"
                            : "bg-[#EAF3FB]"
                          : ""
                      } border-t`}
                      key={i}
                    >
                      <td
                        className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2`}
                      >
                        #{data.rollNumber}
                      </td>
                      <td
                        className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2`}
                      >
                        {data.firstname}
                      </td>
                      <td
                        className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2 text-blue-950 max-xl:hidden`}
                      >
                        {data.gender}
                      </td>
                      <td
                        className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2 max-md:hidden`}
                      >
                        {data.phone}
                      </td>
                      <td
                        className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2 max-lg:hidden`}
                      >
                        {data.email}
                      </td>
                      <td
                        className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2`}
                      >
                        <Button
                          aria-describedby={id}
                          variant="contained"
                          color={`${isDarkMode ? "error" : "info"}`}
                          onClick={(e) => handleClick(e, data)}
                        >
                          Action
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex gap-5 justify-between items-start my-9 mx-10 text-sm max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                <div className="mt-4 text-blue-950">
                  <span
                    className={`${
                      isDarkMode ? "text-white" : "text-slate-400"
                    } leading-5 `}
                  >
                    Showing
                  </span>{" "}
                  <span
                    className={`${
                      isDarkMode ? "text-white" : "text-blue-950"
                    } leading-5 `}
                  >
                    {pageNo * limit - (limit - 1)} -{" "}
                    {Math.min(totalStudentCount, pageNo * limit)}
                  </span>
                  <span
                    className={`${
                      isDarkMode ? "text-white" : "text-slate-400"
                    } leading-5 `}
                  >
                    {" "}
                    from
                  </span>{" "}
                  <span
                    className={`${
                      isDarkMode ? "text-white" : "text-blue-950"
                    } leading-5 `}
                  >
                    {totalStudentCount}
                  </span>
                  <span
                    className={`${
                      isDarkMode ? "text-white" : "text-slate-400"
                    } leading-5 `}
                  >
                    {" "}
                    data
                  </span>
                </div>
                <Stack spacing={2}>
                  <Pagination
                    count={Math.ceil(totalStudentCount / limit)}
                    shape="rounded"
                    page={pageNo}
                    onChange={handlePageChange}
                    renderItem={(item) => (
                      <PaginationItem
                        {...item}
                        sx={{
                          borderColor: "yellow",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          color: isDarkMode ? "white" : "",
                          "&.Mui-selected": {
                            backgroundColor: "#ED0C57",
                          },
                        }}
                      />
                    )}
                  />
                </Stack>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center text-center pb-6">
              <img src={nostudent} className="mb-4 size-52" />
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-blue-950"
                } text-2xl font-bold `}
              >
                No Student at this time
              </p>
              <p
                className={`${
                  isDarkMode ? "text-white" : "text-blue-950"
                }  text-sm`}
              >
                Student will be appear here after they enroll in your School
              </p>
            </div>
          </>
        )}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={`${isDarkMode ? "bg-[#112138]" : ""} p-4`}>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </div>
      </Popover>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          component="form"
          onSubmit={handleModalSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "20px",
            marginBottom: "20px",
            maxHeight: "90vh",
            transform: "translate(-50%, -50%)",
            width: isSmallScreen ? "80%" : 700,
            border: `2px solid ${isDarkMode ? "white" : "#000"}`,
            boxShadow: 24,
            p: isSmallScreen ? 2 : 4,
            overflow: "auto",
            bgcolor: isDarkMode ? "#0d192f" : "background.paper",
            color: isDarkMode ? "white" : "inherit", // Ensure text color is white in dark mode
          }}
        >
          <h2
            id="modal-title"
            style={{ color: isDarkMode ? "white" : "inherit" }}
          >
            Update Student
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="Firstname"
                name="firstname"
                value={formValues.firstname}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                InputProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Lastname"
                name="lastname"
                value={formValues.lastname}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                InputProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="rollNumber"
                label="Roll Number"
                name="rollNumber"
                value={formValues.rollNumber}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                InputProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                value={formValues.age}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                InputProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel
                component="legend"
                style={{ color: isDarkMode ? "white" : "inherit" }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                name="gender"
                id="gender"
                value={formValues.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="Female"
                  control={
                    <Radio sx={{ color: isDarkMode ? "white" : "inherit" }} />
                  }
                  checked={formValues.gender === "Female"}
                  label="Female"
                  sx={{ color: isDarkMode ? "white" : "inherit" }}
                />
                <FormControlLabel
                  value="Male"
                  control={
                    <Radio sx={{ color: isDarkMode ? "white" : "inherit" }} />
                  }
                  checked={formValues.gender === "Male"}
                  label="Male"
                  sx={{ color: isDarkMode ? "white" : "inherit" }}
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                InputProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                InputProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                value={formValues.address}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                InputProps={{
                  style: { color: isDarkMode ? "white" : "inherit" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&:hover fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: isDarkMode ? "white" : "inherit",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
          <div className="flex justify-end mt-4">
            <Button
              type="button"
              onClick={handleModalClose}
              sx={{ mr: 2, color: isDarkMode ? "white" : "inherit" }}
            >
              Close
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
      <Modal
        open={deleteConfirmModal}
        onClose={() => setDeleteConfirmModal(false)}
        aria-labelledby="delete-confirmation-title"
        aria-describedby="delete-confirmation-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: isDarkMode ? "#0d192f" : "background.paper",
            border: `2px solid ${isDarkMode ? "white" : "#000"}`,
            boxShadow: 24,
            p: 4,
            color: isDarkMode ? "white" : "inherit", // Ensure text color is white in dark mode
          }}
        >
          <p
            id="delete-confirmation-description"
            style={{ color: isDarkMode ? "white" : "inherit" }}
          >
            Are you sure you want to delete this student?
          </p>
          <div className="flex justify-end mt-4">
            <Button
              onClick={() => setDeleteConfirmModal(false)}
              sx={{ mr: 2, color: isDarkMode ? "white" : "inherit" }}
            >
              No
            </Button>
            <Button
              onClick={handleConfirmDelete}
              variant="contained"
              color="secondary"
            >
              Yes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default StudentSectionList;
