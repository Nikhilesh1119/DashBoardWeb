import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";import PaginationItem from "@mui/material/PaginationItem";
import { useMediaQuery, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import noteacher from "../assets/noteacher.png";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { axiosClient } from "../services/axiosClient";

function Teacherlist(){
  const isDarkMode = useSelector((state) => state.appConfig.isDarkMode);
  const [pageNo, setPageNo] = useState(1);
  const [totalTeacherCount, setTotalTeacherCount] = useState(5);
  const [limit, setLimit] = useState(5);
  const [teacherData, setTeacherData] = useState([]);
  const [teacherList, setTeacherList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    _id: "",
    username: "",
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const [deleteConfirmModal, setDeleteConfirmModal] = useState(false); // New state for delete confirmation modal
  const [idForDelete, setIdForDelete] = useState();

  const getTeacher = async () => {
    const teacherList = await axiosClient.get(`teacher/teacher-list/${pageNo}`);
    setTotalTeacherCount(teacherList.result.totalCount);
    setLimit(teacherList.result.limit);
    setTeacherData(teacherList.result.teacherList);
    setTeacherList(teacherList.result.teacherList);
  };

  useEffect(() => {
    getTeacher();
  }, [pageNo]);

  useEffect(() => {
    if (selectedTeacher) {
      setFormValues({
        _id: selectedTeacher["_id"],
        username: selectedTeacher.username,
        firstname: selectedTeacher.firstname,
        lastname: selectedTeacher.lastname,
        phone: selectedTeacher.phone,
        email: selectedTeacher.email,
      });
    }
  }, [selectedTeacher]);

  const handlePageChange = (event, value) => {
    setPageNo(value);
  };

  const handleSearch = () => {
    const searchInputLower = searchInput.toLowerCase();
    const searchedTeacher = teacherList.filter(
      (itm) =>
        itm.firstname.toLowerCase() === searchInputLower ||
        itm.username.toLowerCase() === searchInputLower
    );
    setTeacherData(searchedTeacher);
  };

  const handleClear = () => {
    setSearchInput("");
    setTeacherData(teacherList);
  };

  const handleClick = (event, teacher) => {
    setAnchorEl(event.currentTarget);
    setSelectedTeacher(teacher);
    setIdForDelete(teacher["_id"]);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTeacher(null);
  };

  const handleDelete = () => {
    setDeleteConfirmModal(true); // Show delete confirmation modal
    handleClose();
  };

  const handleConfirmDelete = async () => {
    try {
      await axiosClient.delete(`/teacher/${idForDelete}`);
      getTeacher();
      toast.success("Teacher deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete teacher!");
    }
    setDeleteConfirmModal(false);
    setSelectedTeacher(null);
  };

  const handleUpdate = () => {
    setOpenModal(true);
    handleClose();
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedTeacher(null);
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
    const updatedTeacher = {
      ...formValues,
    };
    try {
      await axiosClient.put(`/teacher/${updatedTeacher["_id"]}`, updatedTeacher);
      getTeacher();
      toast.success("Teacher updated successfully!");
    } catch (error) {
      toast.error(<b>{error}</b>);
    }
    setOpenModal(false);
    setSelectedTeacher(null);
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
              <div className="flex flex-col grow shrink-0 justify-center items-start py-0.5 rounded basis-0 w-fit max-md:max-w-full max-md:hidden">
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
        {teacherData.length > 0 ? (
          <>
            <div className="w-full max-md:max-w-full px-3">
              <table className={`${
                  isDarkMode ? " bg-[#0D192F]" : "bg-white"
                } w-full max-md:px-5 max-md:max-w-full mt-6`}>
                <thead>
                  <tr className="text-base font-medium text-indigo-900">
                    <th className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 `}>UserName</th>
                    <th className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 max-md:hidden`}>FirstName</th>
                    <th className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 max-lg:hidden`}>Phone</th>
                    <th className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 max-xl:hidden `}>Email</th>
                    <th className={`${
                        isDarkMode ? "text-white" : ""
                      } text-left px-4 py-2 `}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherData.map((data, i) => (
                    <tr className={`${
                      i % 2 === 0
                        ? isDarkMode
                          ? "bg-[#0D2137]"
                          : "bg-[#EAF3FB]"
                        : ""
                    } border-t`} key={i}>
                      <td className="flex items-center px-4 py-2">
                        <div className="bg-amber-300 h-[30px] rounded-[40px] w-[30px]" />
                        <span  className={`${
                          isDarkMode ? "text-white" : ""
                        } ml-2`}>{data.username}</span>
                      </td>
                      <td  className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2 max-md:hidden`}>{data.firstname}</td>
                      <td  className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2 max-lg:hidden`}>{data.phone}</td>
                      <td  className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2 max-xl:hidden`}>{data.email}</td>
                      <td className={`${
                          isDarkMode ? "text-white" : ""
                        } px-4 py-2`}>
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
                    {Math.min(totalTeacherCount, pageNo * limit)}
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
                    {totalTeacherCount}
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
                    count={Math.ceil(totalTeacherCount / limit)}
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
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <img src={noteacher} className="mb-4 size-52" />
            <p
              className={`${
                isDarkMode ? "text-white" : "text-blue-950"
              } text-2xl font-bold `}
            >
              No Teachers found
            </p>
            <p
              className={`${
                isDarkMode ? "text-white" : "text-blue-950"
              } text-sm`}
            >
              Please try another search term
            </p>
          </div>
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
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: isDarkMode ? '#0d192f' : 'background.paper',
            border: `2px solid ${isDarkMode ? 'white' : '#000'}`,
            boxShadow: 24,
            p: 4,
            color: isDarkMode ? 'white' : 'inherit',
          }}
        >
          <h2 id="modal-title" style={{ color: isDarkMode ? 'white' : 'inherit' }}>Update Teacher</h2>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            InputProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&:hover fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&.Mui-focused fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            value={formValues.firstname}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            InputProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&:hover fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&.Mui-focused fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            value={formValues.lastname}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            InputProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&:hover fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&.Mui-focused fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            value={formValues.phone}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            InputProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&:hover fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&.Mui-focused fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            InputProps={{ style: { color: isDarkMode ? 'white' : 'inherit' } }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&:hover fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
                '&.Mui-focused fieldset': { borderColor: isDarkMode ? 'white' : 'inherit' },
              },
            }}
          />
          <div className="flex justify-end mt-4">
            <Button type="button" onClick={handleModalClose} sx={{ mr: 2, color: isDarkMode ? 'white' : 'inherit' }}>
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
            bgcolor: isDarkMode ? '#0d192f' : 'background.paper',
            border: `2px solid ${isDarkMode ? 'white' : '#000'}`,
            boxShadow: 24,
            p: 4,
            color: isDarkMode ? 'white' : 'inherit',
          }}
        >
          <p id="delete-confirmation-description" style={{ color: isDarkMode ? 'white' : 'inherit' }}>
            Are you sure you want to delete this teacher?
          </p>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setDeleteConfirmModal(false)} sx={{ mr: 2, color: isDarkMode ? 'white' : 'inherit' }}>
              No
            </Button>
            <Button onClick={handleConfirmDelete} variant="contained" color="secondary">
              Yes
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Teacherlist;