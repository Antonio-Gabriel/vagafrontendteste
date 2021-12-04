import { ICardProps } from "../../types/ICardProps";
import { Container, Description, IsActive } from "./styles";

export function Card({
  id,
  name,
  subject,
  owner,
  users,
  handleClick,
  isChecked,
}: ICardProps) {
  return (
    <Container hasActive={isChecked ? true : false}>
      <div className="left">
        <div className="acronym">{owner}</div>
        <Description>
          <h2>{name}</h2>
          <div className="text">
            <span className="circle">16</span>
            <p>{subject}</p>
          </div>
          <div className="prohibited">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.403 5.633C17.5714 4.79588 16.5819 4.13211 15.4919 3.68015C14.4019 3.22818 13.233 2.997 12.053 3C7.105 3 3.077 7.027 3.075 11.977C3.075 13.559 3.488 15.103 4.273 16.465L3 21.116L7.759 19.867C9.07539 20.5836 10.5502 20.9593 12.049 20.96H12.053C17 20.96 21.028 16.933 21.03 11.983C21.0334 10.8035 20.803 9.63499 20.3521 8.54506C19.9012 7.45513 19.2387 6.46537 18.403 5.633ZM12.053 19.445H12.05C10.7135 19.4451 9.40163 19.0856 8.252 18.404L7.98 18.242L5.156 18.983L5.909 16.23L5.732 15.948C4.98479 14.7584 4.58923 13.3818 4.591 11.977C4.593 7.863 7.94 4.516 12.056 4.516C13.0363 4.51382 14.0072 4.70608 14.9127 5.08165C15.8181 5.45722 16.6401 6.00864 17.331 6.704C18.0256 7.39604 18.5762 8.21889 18.9509 9.125C19.3256 10.0311 19.517 11.0025 19.514 11.983C19.512 16.097 16.165 19.445 12.053 19.445ZM16.146 13.856C15.921 13.743 14.819 13.201 14.613 13.126C14.408 13.051 14.259 13.014 14.109 13.238C13.959 13.462 13.529 13.967 13.398 14.117C13.267 14.267 13.136 14.285 12.912 14.173C12.688 14.061 11.965 13.824 11.108 13.06C10.441 12.465 9.991 11.731 9.86 11.506C9.729 11.281 9.846 11.16 9.959 11.048C10.06 10.948 10.183 10.786 10.295 10.655C10.407 10.524 10.444 10.431 10.519 10.281C10.594 10.131 10.557 10 10.5 9.888C10.444 9.775 9.995 8.671 9.808 8.222C9.627 7.787 9.442 7.845 9.304 7.839C9.16108 7.83315 9.01804 7.83048 8.875 7.831C8.76126 7.8339 8.64934 7.86026 8.54626 7.90845C8.44318 7.95663 8.35117 8.02559 8.276 8.111C8.07 8.336 7.491 8.878 7.491 9.982C7.491 11.086 8.295 12.153 8.407 12.303C8.519 12.453 9.989 14.718 12.239 15.69C12.775 15.921 13.193 16.059 13.518 16.163C14.055 16.334 14.544 16.309 14.931 16.252C15.362 16.188 16.258 15.71 16.445 15.186C16.632 14.662 16.632 14.213 16.576 14.119C16.52 14.025 16.369 13.968 16.146 13.856Z"
                fill="#F1972C"
              />
            </svg>
            <span>Caixa de entrada</span>
          </div>
        </Description>
      </div>
      <div className="right">
        <div className="top">
          <span className="time">Hoje, 11:42</span>
          <span className="hour">2 horas</span>
        </div>

        <div className="acronyms">
          {users?.map((item) => (
            <div className="circle" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <IsActive className="hasHover">
        <input
          id={String(id)}
          type="checkbox"
          className="checkbox"
          onChange={handleClick}
          checked={isChecked}
        />
        <div className="options">
          <div className="edit">
            <i className="icon-edit" />
          </div>
          <div className="delete">
            <i className="icon-delete" />
          </div>
        </div>
      </IsActive>
    </Container>
  );
}
