import {
  tooltipClasses,
  TooltipProps,
  Tooltip as MuiTooltip,
  styled,
} from "@mui/material";

export default styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.grey[900],
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.grey[900],
    boxShadow: 32,
  },
}));
