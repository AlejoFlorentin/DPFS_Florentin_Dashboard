import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Skeleton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { useParams, Link } from "react-router";
import useFetch from "../../hooks/useFetch";
import { formatDate } from "../../services/formatDate";
import { CalendarMonth, Email, Phone, ShoppingCart } from "@mui/icons-material";

const UserDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `http://localhost:3000/api/users/${id}`
  );

  const user = data?.user;

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Card sx={{ maxWidth: 400, width: "100%", p: 2 }}>
          <Skeleton variant="rectangular" width="100%" height={250} />
          <CardContent>
            <Skeleton variant="text" width="60%" height={35} />
            <Skeleton variant="text" width="40%" height={25} />
            <Skeleton variant="text" width="70%" height={25} />
            <Skeleton variant="text" width="50%" height={25} />
          </CardContent>
        </Card>
      </Box>
    );
  }

  if (error || !user) {
    return (
      <Typography color="error" sx={{ textAlign: "center", mt: 4 }}>
        No se pudo cargar el usuario
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        mt: 4,
      }}>
      <Box sx={{ flex: 1, maxWidth: 400 }}>
        <Card sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
          <CardMedia
            component="img"
            height="250"
            image={
              user.image
                ? `http://localhost:3000${user.image.url}`
                : "/src/assets/img/default.jpg"
            }
            alt={user.name}
          />
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {user.name} {user.last_name}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", mt: 1 }}
              variant="body1"
              color="text.secondary">
              <Phone sx={{ mr: 1 }} /> {user.phone}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", mt: 1 }}
              variant="body1"
              color="text.secondary">
              <Email sx={{ mr: 1 }} /> {user.email}
            </Typography>
            <Typography
              sx={{ display: "flex", alignItems: "center", mt: 1 }}
              variant="body1"
              color="text.secondary">
              <CalendarMonth sx={{ mr: 1 }} /> Creado:{" "}
              {user.created_at
                ? formatDate(user.created_at.slice(0, 10))
                : "Fecha no disponible"}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Link to="/">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", color: "white" }}>
                  Volver
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ flex: 2, maxWidth: 400 }}>
        <Card sx={{ width: "100%", backgroundColor: "#f5f5f5" }}>
          <CardContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ display: "flex", alignItems: "center" }}>
              <ShoppingCart sx={{ mr: 1 }} />
              Ordenes
            </Typography>

            {user.orders && user.orders.length > 0 ? (
              user.orders.map((order, index) => (
                <Box key={index}>
                  <ListItem
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 2,
                      mb: 2,
                      mt: 2,
                    }}>
                    <ListItemText
                      primary={`Total: $${order.total.toLocaleString()}`}
                      secondary={`Items: ${order.items} - Fecha: ${formatDate(
                        order.created_at.slice(0, 10)
                      )}`}
                    />
                  </ListItem>
                  {index < user.orders.length - 1 && <Divider />}
                </Box>
              ))
            ) : (
              <Typography color="text.secondary">
                Este usuario no tiene órdenes registradas.
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default UserDetail;
