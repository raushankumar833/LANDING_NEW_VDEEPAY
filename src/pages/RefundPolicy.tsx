import { Box, Container, Typography, Paper } from "@mui/material";
import React from "react";
import RefundIcon from "@mui/icons-material/AttachMoney";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ScheduleIcon from "@mui/icons-material/Schedule";

const RefundPolicy = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        textAlign: "center",
        background: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 5,
        padding: 4,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#dc5f5f", fontSize: "2.5rem" }}
      >
        Refund &amp; Policy
      </Typography>
      <Box
        sx={{
          width: "80px",
          height: "8px",
          backgroundColor: "#dc5f5f",
          margin: "0 auto 2rem",
          borderRadius: 1,
        }}
      />

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Paper
          elevation={8}
          sx={{
            padding: 4,
            borderRadius: 3,
            mb: 3,
            width: "100%",
            maxWidth: "600px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "120%",
              height: "120%",
              background: "rgba(220, 95, 95, 0.1)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#dc5f5f", mb: 1, zIndex: 1 }}
          >
            Important Notice
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, zIndex: 1 }}
          >
            <RefundIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Once a User chooses to avail any service plan/offer announced by{" "}
            <strong>PSPKA SERVICES PRIVATE LIMITED </strong> and agrees to
            buy that plan, such payment shall not be refunded by{" "}
            <strong>PSPKA SERVICES PRIVATE LIMITED </strong> under any
            circumstances.
          </Typography>
        </Paper>

        <Paper
          elevation={8}
          sx={{
            padding: 4,
            borderRadius: 3,
            mb: 3,
            width: "100%",
            maxWidth: "600px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "120%",
              height: "120%",
              background: "rgba(220, 95, 95, 0.1)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#dc5f5f", mb: 1, zIndex: 1 }}
          >
            KYC Verification
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, zIndex: 1 }}
          >
            <VerifiedUserIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Post receipt of payment,{" "}
            <strong>PSPKA SERVICES PRIVATE LIMITED </strong> will create a
            User ID only after successful KYC verification. If the KYC is
            unsuccessful, a User ID cannot be created.
          </Typography>
        </Paper>

        <Paper
          elevation={8}
          sx={{
            padding: 4,
            borderRadius: 3,
            mb: 3,
            width: "100%",
            maxWidth: "600px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "10%",
              width: "120%",
              height: "120%",
              background: "rgba(220, 95, 95, 0.1)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#dc5f5f", mb: 1, zIndex: 1 }}
          >
            Refund Process
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, zIndex: 1 }}
          >
            <ScheduleIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            Transactions that fail due to issues directly attributable to{" "}
            <strong>PSPKA SERVICES PRIVATE LIMITED</strong> will be
            refunded within 3-21 working days. Only the actual transaction
            amount will be refunded, excluding fees.
          </Typography>
        </Paper>
      </Box>

      <Typography variant="body2" sx={{ color: "#666", mt: 4 }}>
        For any queries, please contact our customer care.
      </Typography>
    </Container>
  );
};

export default RefundPolicy;