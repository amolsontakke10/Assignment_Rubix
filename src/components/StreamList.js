import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStreams, deleteStream } from "../actions";
import { Link } from "react-router-dom";

const StreamList = () => {
  const dispatch = useDispatch();
  const streams = useSelector((state) => state.streams);

  useEffect(() => {
    dispatch(fetchStreams());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteStream(id));
  };

  return (
    <div className="ui container">
      <h2 className="ui header centered">Streams</h2>
      <div className="ui segment">
        <Link to="/create" className="ui button primary">
          Create Stream
        </Link>
        <div className="ui relaxed divided list">
          {streams.map((stream) => (
            <div className="item" key={stream.id}>
              <div className="content">
                <h3 className="header">{stream.title}</h3>
                <p>{stream.description}</p>
                <div className="extra">
                  <Link to={`/edit/${stream.id}`} className="ui button">
                    Edit
                  </Link>
                  <button
                    className="ui button negative"
                    onClick={() => handleDelete(stream.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamList;
